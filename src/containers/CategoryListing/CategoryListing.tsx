/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Pagination, Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { debounce } from "lodash";
import FilterListIcon from "@material-ui/icons/FilterList";
import React, { useCallback, useEffect } from "react";
import Input from "../../components/Input/Input";
import StyledLink from "../../components/StyledLink/StyledLink";
import {
  CategoryBanner,
  CategorySeach,
  ScrollDiv,
  Header,
  Container,
  FilterContainer,
  Tag,
  ListingSection,
  DisplaySection,
  FilterSection,
  HeaderTitle,
  PaginationContainer,
  StyledModal,
  Body,
  SkeletonWrapper,
} from "./style";
import NavHeader from "../../components/Header/Header";

import CategoryListingCard from "./CategoryListingCard/CategoryListingCard";
import FilterCard from "./FilterCard/FIlterCard";
import OptionCard from "./OptionsCard/OptionCard";
import useGenericState from "../../Library/useGenericState";
import { RootState } from "../../redux/index.interface";
import { fetchPlaces, filterPlaces } from "./action";
import NoResult from "../../components/NoResult/NoResult";
import { fetchSingleCategory } from "../Landing/component/CategorySection/action";
import SimilarOptions from "./SimilarOption/SimilarOptions";

const listing = [
  {
    id: 1,
    title: "High price to Low Price",
    value: "lucknow",
  },
  {
    id: 2,
    title: "By Alphabet",
    value: "Kanpur",
  },
  {
    id: 3,
    title: "Low price to High Price",
    value: "Delhi",
  },
  {
    id: 4,
    title: "Descending",
    value: "Haryana",
  },
];

interface RouteParams {
  ct_id: string;
}

interface ListingProps {
  fetchPlaces: (
    categoryId: string,
    stateId: string,
    limit?: number,
    page?: number,
    search?: string
  ) => void;
  places: [];
  loading: boolean;
  pagination: any;
  totalPages: number;
  filters: [];
  fetchSingleCategory: (categoryId: string) => void;
  activeCategory: any;
  filterPlaces: (categoryId: string, stateId: string, filters: any) => void;
}

const CategoryListing: React.FC<ListingProps> = (props) => {
  const { places, loading, pagination, totalPages, filters, activeCategory } =
    props;

  const [state, setState] = useGenericState({
    query: "",
    showFilterModal: false,
    filterState: [],
  });

  const params: RouteParams = useParams();

  const { showFilterModal, query, filterState } = state;

  const debouncedSave = useCallback(
    debounce(
      (value) =>
        props.fetchPlaces(
          params.ct_id,
          "60c5a49cb2f275a866877bba",
          5,
          1,
          value
        ),
      300
    ),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSave(event?.target?.value ?? "");
  };

  useEffect(() => {
    props.fetchPlaces(params.ct_id, "60c5a49cb2f275a866877bba");
    props.fetchSingleCategory(params.ct_id);
  }, []);

  useEffect(() => {
    document.title = `${activeCategory.title} | TOURX`;
  }, [activeCategory]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    props.fetchPlaces(
      params.ct_id,
      "60c5a49cb2f275a866877bba",
      pagination?.next?.limit ?? 5,
      pagination?.next?.page ?? value
    );
  };

  const handleFilterChange = (checked: boolean, filter: any) => {
    let filtersData: any = [];
    if (checked) {
      filtersData = [...state.filterState, filter];
    } else {
      filtersData = [...state.filterState];
      filtersData.forEach((item: any, index: any) => {
        if (item.id === filter.id) {
          filtersData.splice(index, 1);
        }
      });
    }
    setState({
      filterState: filtersData,
    });
  };

  useEffect(() => {
    if (!filterState.length) {
      props.fetchPlaces(params.ct_id, "60c5a49cb2f275a866877bba");
    } else {
      props.filterPlaces(params.ct_id, "60c5a49cb2f275a866877bba", filterState);
    }
  }, [filterState]);

  return (
    <div style={{ position: "relative" }}>
      <NavHeader isTransparent={false} elevation="none" />
      <CategoryBanner data-bg={activeCategory.banner} />
      <Container>
        <Header>Best Options on {activeCategory.title}</Header>
        <CategorySeach>
          <Input
            placeholder="Search Options In Hotels"
            icon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
            onChange={handleSearch}
          />

          <FilterContainer>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sort By
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={query}
                label="Sort By"
                style={{ padding: "4px" }}
              >
                {listing.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FilterContainer>
        </CategorySeach>
        <ScrollDiv>
          <Tag>Hotel</Tag>
          <ListingSection>
            <FilterSection>
              <FilterCard />
              <OptionCard filters={filters} onChange={handleFilterChange} />
            </FilterSection>
            <DisplaySection>
              {loading ? (
                [1, 2, 3, 4, 5].map(() => (
                  <SkeletonWrapper>
                    <Skeleton
                      style={{ borderRadius: "12px" }}
                      variant="rect"
                      width="35%"
                      animation="wave"
                      height="100%"
                    />
                    <div
                      style={{
                        width: "100%",
                        marginLeft: "12px",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column",
                      }}
                    >
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        variant="rect"
                        width="100%"
                        height="10%"
                        animation="wave"
                      />
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        variant="rect"
                        width="100%"
                        height="30%"
                        animation="wave"
                      />
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        variant="rect"
                        width="100%"
                        height="10%"
                        animation="wave"
                      />
                    </div>
                    <div style={{ width: "33%", marginLeft: "12px" }}>
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        variant="rect"
                        width="100%"
                        height="100%"
                        animation="wave"
                      />
                    </div>
                  </SkeletonWrapper>
                ))
              ) : places.length ? (
                places.map((item: any) => (
                  <StyledLink to={`/places/${item.title}/${item._id}`}>
                    <CategoryListingCard cardDetails={item} />
                  </StyledLink>
                ))
              ) : (
                <NoResult />
              )}
            </DisplaySection>
          </ListingSection>
        </ScrollDiv>
        <PaginationContainer>
          <Pagination
            count={totalPages ?? 0}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </PaginationContainer>
        <HeaderTitle>Similar Options Available</HeaderTitle>
        <SimilarOptions />
      </Container>
      <Fab
        aria-label="Filter Button"
        className="filter_button"
        color="primary"
        onClick={() => setState({ showFilterModal: true })}
      >
        <FilterListIcon />
      </Fab>

      <StyledModal
        open={showFilterModal}
        onClose={() => setState({ showFilterModal: false })}
        aria-labelledby="filter-modal"
        aria-describedby="filter modal"
      >
        <Body>
          <FilterSection data-display="block">
            <FilterCard />
            <OptionCard filters={filters} onChange={handleFilterChange} />
          </FilterSection>
        </Body>
      </StyledModal>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  places: state.places.searchedPlaces,
  loading: state.places.loading,
  pagination: state.places.pagination,
  totalPages: state.places.totalPages,
  filters: state.places.filters,
  activeCategory: state.category.activeCategory,
});

export default connect(mapStateToProps, {
  fetchPlaces,
  fetchSingleCategory,
  filterPlaces,
})(CategoryListing);
