/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

import { Body, CategoryContainer, StyledModal } from "./style";
import Input from "../../components/Input/Input";
import { searchCategory } from "../WelcomeGuide/action";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
// import { Category } from "../WelcomeGuide/PickPreferences/PickPreferences.interface";
import StyledLink from "../../components/StyledLink/StyledLink";
import { Category } from "../WelcomeGuide/PickPreferences/PickPreferences.interface";
import NoResult from "../../components/NoResult/NoResult";

const CategorySearch = (props: any): JSX.Element => {
  const {
    open,
    onClose,
    ariaDescribedby,
    ariaLabelledby,
    categories,
    loading,
  } = props;

  useEffect(() => {
    props.searchCategory("");
  }, []);

  const debouncedSave = useCallback(
    debounce((value: string) => props.searchCategory(value), 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSave(event?.target?.value ?? "");
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
    >
      <Body>
        <Input
          placeholder="Search Catagory"
          onChange={handleSearch}
          icon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
        />

        <CategoryContainer>
          {loading ? (
            Array.from(new Array(6)).map(() => (
              <Box pt={0.5} style={{ width: "200px", margin: "auto" }}>
                <Skeleton style={{ height: "220px" }} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            ))
          ) : categories.length === 0 ? (
            <NoResult />
          ) : (
            categories.map((category: Category) => (
              <StyledLink
                to={`/category/${category.title.toLowerCase()}/${category._id}`}
              >
                <CategoryCard
                  key={category._id}
                  id={category._id}
                  title={category.title}
                  image={category.imageUrl}
                  description={category.placesCount.toString()}
                />
              </StyledLink>
            ))
          )}
        </CategoryContainer>
      </Body>
    </StyledModal>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.welcomeGuide.category,
  loading: state.welcomeGuide.categoryLoading,
});

export default connect(mapStateToProps, {
  searchCategory,
})(CategorySearch);
