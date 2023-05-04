import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFavorites } from "@/redux/states/favorites";
import { addPeople } from "@/redux/states";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { PeopleTable } from "./components";
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
