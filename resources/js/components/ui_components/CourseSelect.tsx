import {
    SearchSelect,
    SearchSelectItem,
  } from '@tremor/react';
  
  export function CourseSelect() {
    return (
      <div className="max-w-md">
        <div className="mb-4 mt-4 font-bold text-md">
          Select/Search Course
        </div>
        <SearchSelect>
          <SearchSelectItem value="Pharmacy">Pharmacy</SearchSelectItem>
          <SearchSelectItem value="Architecture">Architecture</SearchSelectItem>
          <SearchSelectItem value="Industrial Engineering">Industrial Engineering</SearchSelectItem>
          <SearchSelectItem value="Computer Science">Computer Science</SearchSelectItem>
          <SearchSelectItem value="Information Technology">Information Technology</SearchSelectItem>
          <SearchSelectItem value="Mechanical Engineering">Mechanical Engineering</SearchSelectItem>
        </SearchSelect>
      </div>
    );
  }