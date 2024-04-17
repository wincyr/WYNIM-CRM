import {
    SearchSelect,
    SearchSelectItem,
  } from '@tremor/react';
  
  export function SchoolSelect() {
    return (
      <div className="max-w-md">
        <div className="mb-4 mt-4 font-bold text-md">
          Select/Search School
        </div>
        <SearchSelect>
          <SearchSelectItem value="University of Toronto">University of Toronto</SearchSelectItem>
          <SearchSelectItem value="University of British Columbia">University of British Columbia</SearchSelectItem>
          <SearchSelectItem value="University of Calgary">University of Calgary</SearchSelectItem>
          <SearchSelectItem value="University of Waterloo">University of Waterloo</SearchSelectItem>
          <SearchSelectItem value="University of Alberta">University of Alberta</SearchSelectItem>
          <SearchSelectItem value="Universite de Montreal">Universite de Montreal</SearchSelectItem>
          <SearchSelectItem value="University of Lethbridge">University of Lethbridge</SearchSelectItem>
        </SearchSelect>
      </div>
    );
  }