import { Dispatch } from "redux";
import { FETCH_POPULAR_CATEGORY } from "./constant";

export const fetchPopularCategory =
  () =>
  (dispatch: Dispatch): void => {
    const category = [
      {
        id: 1,
        title: "Hotels",
        options: "1200",
        img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        title: "Hospitals",
        options: "400",
        img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        title: "Restraunt",
        options: "200",
        img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        title: "Entertainment",
        options: "1500",
        img: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 1,
        title: "Hotels",
        options: "1200",
        img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        title: "Hospitals",
        options: "400",
        img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        title: "Restraunt",
        options: "200",
        img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 1,
        title: "Hotels",
        options: "1200",
        img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        title: "Hospitals",
        options: "400",
        img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        title: "Restraunt",
        options: "200",
        img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        title: "Entertainment",
        options: "1500",
        img: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ];

    dispatch({
      type: FETCH_POPULAR_CATEGORY,
      payload: category,
    });
  };
