import {
    Select,
    SelectItem,
  } from '@tremor/react';
  

export function EducationSelect() {
  return (
    <div className="mx-auto max-w-full">
      <div className="mb-4 text-center text-xl font-bold p-2">
        Select Current Education
      </div>
      <Select>
        <SelectItem value="Grade 7">Grade 7</SelectItem>
        <SelectItem value="Grade 8">Grade 8</SelectItem>
        <SelectItem value="Grade 9">Grade 9</SelectItem>
        <SelectItem value="Grade 10">Grade 10</SelectItem>
        <SelectItem value="Grade 11">Grade 11</SelectItem>
        <SelectItem value="Grade 12">Grade 12</SelectItem>
        <SelectItem value="First Year College">First Year College</SelectItem>
        <SelectItem value="Second Year College">Second Year College</SelectItem>
        <SelectItem value="Third Year College">Third Year College</SelectItem>
        <SelectItem value="Fourth Year College">Fourth Year College</SelectItem>
        <SelectItem value="Bachelors Degree">Bachelors Degree</SelectItem>
        <SelectItem value="Masters Degree">Masters Degree</SelectItem>
      </Select>
    </div>
  )
}
