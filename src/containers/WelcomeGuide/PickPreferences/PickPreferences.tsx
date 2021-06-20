/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
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
  SubTitle,
  Tag,
  TagContainer,
  Title,
} from "./style";
import { Category } from "./PickPreferences.interface";
import sanitizeString from "../../../Library/helper";
import { RootState } from "../../../redux/index.interface";

const PickPreferences = (props: any): JSX.Element => {
  const { categories, selectedCategory } = props;

  useEffect(() => {
    props.searchCategory();
  }, []);

  const debouncedSave = useCallback(
    debounce((value) => props.searchCategory(value), 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSave(event?.target?.value ?? "");
  };

  const setSelected = (category: Category) => {
    const isExist = selectedCategory.find(
      (item: Category) => item._id === category._id
    );
    if (isExist) return;
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
        {categories.map((category: Category) => (
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
              <Image src={category.imageUrl ?? ""} />
            </ImageContainer>
            <div>
              <Title>{category.title}</Title>
              <SubTitle>{`${category.options}+ Options`}</SubTitle>
            </div>
          </CatagoryCard>
        ))}
      </CategoryContainer>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  categories: state.welcomeGuide.category,
  selectedCategory: state.welcomeGuide.selectedCategory,
});

export default connect(mapStateToProps, {
  searchCategory,
  updateSelectedCategory,
  removeCategory,
  removeAllCategory,
})(PickPreferences);
