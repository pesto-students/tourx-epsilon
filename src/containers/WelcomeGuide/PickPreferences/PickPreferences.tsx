/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Skeleton from "@material-ui/lab/Skeleton";
import WarningIcon from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { CloseOutline } from "react-ionicons";
import Input from "../../../components/Input/Input";
import {
  searchCategory,
  updateSelectedCategory,
  removeCategory,
  removeAllCategory,
} from "../action";
import {
  CatagoryCard,
  CategoryContainer,
  Container,
  Image,
  ImageContainer,
  SkeletonContainer,
  SubTitle,
  Tag,
  TagContainer,
  Title,
} from "./style";
import { Category } from "./PickPreferences.interface";
import sanitizeString from "../../../Library/helper";
import { ErrorLayout, ErrorSpan } from "../../../components/Stepper/styles";
import useGenericState from "../../../Library/useGenericState";
import { RootState } from "../../../redux/index.interface";

const PickPreferences = (props: any): JSX.Element => {
  const [snackBar, setSnackBar] = useGenericState({
    showSnackBar: false,
    snackBarMessage: "",
  });

  const { categories, selectedCategory, loading } = props;
  const { showSnackBar, snackBarMessage } = snackBar;
  useEffect(() => {
    props.searchCategory("");
  }, []);

  const debouncedSave = useCallback(
    debounce((value) => props.searchCategory(value), 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSave(event?.target?.value ?? "");
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar({ showSnackBar: false });
  };

  const setSelected = (category: Category) => {
    const isExist = selectedCategory.find(
      (item: Category) => item._id === category._id
    );

    if (isExist) {
      props.removeCategory(category);
      return;
    }

    if (selectedCategory.length === 4) {
      setSnackBar({
        showSnackBar: true,
        snackBarMessage: "Please Select Max of 4 Categories",
      });
      return;
    }
    props.updateSelectedCategory(category);
  };

  return (
    <Container>
      <Input
        placeholder="Search Catagory"
        onChange={handleSearch}
        icon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
      />
      <TagContainer>
        {selectedCategory.map((category: Category) => (
          <Tag key={category._id}>
            {sanitizeString(category.title)}
            <CloseOutline
              height="18px"
              width="18px"
              onClick={() => props.removeCategory(category)}
            />
          </Tag>
        ))}
        {selectedCategory.length ? (
          <Tag className="remove_all">
            Remove all
            <CloseOutline
              height="18px"
              width="18px"
              onClick={() => props.removeAllCategory()}
            />
          </Tag>
        ) : undefined}
      </TagContainer>
      <CategoryContainer>
        {!loading
          ? categories.map((category: Category) => (
              <CatagoryCard
                key={category.title}
                onClick={() => setSelected(category)}
              >
                <ImageContainer
                  className={
                    selectedCategory.filter(
                      (item: Category) => item._id === category._id
                    ).length
                      ? "active"
                      : ""
                  }
                >
                  <Image src={category.imageUrl ?? ""} alt="category image" />
                </ImageContainer>
                <div>
                  <Title>{category.title}</Title>
                  <SubTitle>{`${category.placesCount}+ Options`}</SubTitle>
                </div>
                <div />
              </CatagoryCard>
            ))
          : [1, 2, 3, 4].map((e) => (
              <SkeletonContainer key={e}>
                <Skeleton
                  animation="wave"
                  variant="circle"
                  width={50}
                  height={50}
                />
                <div>
                  <Skeleton
                    animation="wave"
                    height={20}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    animation="wave"
                    height={20}
                    width="40%"
                    style={{ marginBottom: 6 }}
                  />
                </div>
              </SkeletonContainer>
            ))}
      </CategoryContainer>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <ErrorLayout>
          <WarningIcon />
          <ErrorSpan>{snackBarMessage}</ErrorSpan>
        </ErrorLayout>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  categories: state.welcomeGuide.category,
  selectedCategory: state.welcomeGuide.selectedCategory,
  loading: state.welcomeGuide.categoryLoading,
});

export default connect(mapStateToProps, {
  searchCategory,
  updateSelectedCategory,
  removeCategory,
  removeAllCategory,
})(PickPreferences);
