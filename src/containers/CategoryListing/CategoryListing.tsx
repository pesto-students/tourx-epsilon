import {
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import FilterListIcon from "@material-ui/icons/FilterList";
import React from "react";
import Input from "../../components/Input/Input";
// import StyledLink from "../../components/StyledLink/StyledLink";
import {
  CategoryBanner,
  CategorySeach,
  ScrollDiv,
  Header,
  Container,
  FilterContainer,
  Tag,
  // CategoryContainer,
  ListingSection,
  DisplaySection,
  FilterSection,
  HeaderTitle,
  PaginationContainer,
  StyledModal,
  Body,
} from "./style";
import NavHeader from "../../components/Header/Header";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
// import { Category } from "../WelcomeGuide/PickPreferences/PickPreferences.interface";
import CategoryListingCard from "./CategoryListingCard/CategoryListingCard";
import FilterCard from "./FilterCard/FIlterCard";
import OptionCard from "./OptionsCard/OptionCard";
import useGenericState from "../../Library/useGenericState";

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

const categories = [
  {
    id: 1,
    title: "Hotels",
    options: "1200",
    slug: "hotels",
    img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Hospitals",
    options: "400",
    slug: "hospitals",
    img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const CategoryListing: React.FC = () => {
  const [state, setState] = useGenericState({
    query: "",
    showFilterModal: false,
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState({ query: event.target.value as string });
  };

  const { showFilterModal, query } = state;

  return (
    <div style={{ position: "relative" }}>
      <NavHeader isTransparent={false} elevation="none" />
      <CategoryBanner />
      <Container>
        <Header>Best Options on Hotels</Header>
        <CategorySeach>
          <Input
            placeholder="Search Options In Hotels"
            icon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
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
                onChange={handleChange}
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
              <OptionCard />
            </FilterSection>
            <DisplaySection>
              {categories.map((item) => (
                <CategoryListingCard cardDetails={item} />
              ))}
            </DisplaySection>
          </ListingSection>
        </ScrollDiv>
        <PaginationContainer>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </PaginationContainer>
        <HeaderTitle>Similar Options Available</HeaderTitle>
        {/* <CategoryContainer>
          {loading
            ? Array.from(new Array(6)).map((item) => (
                <Box pt={0.5} style={{ width: "200px", margin: "auto" }}>
                  <Skeleton style={{ height: "220px" }} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              ))
            : categories.map((category: Category) => (
                <StyledLink to={`/category/${category.slug}/${category.id}`}>
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.img}
                    description={category.options}
                  />
                </StyledLink>
              ))}
        </CategoryContainer> */}
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
            <OptionCard />
          </FilterSection>
        </Body>
      </StyledModal>
    </div>
  );
};

export default CategoryListing;
