import React from "react";
import Table from "./table"

const calculateAge = (birthdate) => {
  const birthDateObj = new Date(birthdate)
  const today = new Date()
  let age = today.getFullYear() - birthDateObj.getFullYear()

  const monthDiff = today.getMonth() - birthDateObj.getMonth()
  return (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) ? --age : age
}

const DataTable = ({ students, searchTerm, minDate, maxDate }) => {
  const filteredStudents = students.filter((student) => {
    const studentAge = calculateAge(student.birthdate)
    
    const isSearchTermNumber = !isNaN(searchTerm)

    const matchesSearchTerm = isSearchTermNumber
      ? studentAge.toString().includes(searchTerm)
      : student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())

    const studentDate = new Date(student.birthdate).toISOString().split("T")[0]
    const matchesDateRange = (!minDate || studentDate >= minDate) && (!maxDate || studentDate <= maxDate)

    return (!searchTerm && !minDate && !maxDate) || (matchesSearchTerm && matchesDateRange)
  })

  return (
    <Table.TableContainer>
      <Table.THead>
        <Table.Row>
          <Table.ColumnHeader>Last Name</Table.ColumnHeader>
          <Table.ColumnHeader>First Name</Table.ColumnHeader>
          <Table.ColumnHeader>Course</Table.ColumnHeader>
          <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
          <Table.ColumnHeader>Age</Table.ColumnHeader>
        </Table.Row>
      </Table.THead>
      <Table.TBody>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <Table.Row key={index}>
              <Table.Column>{student.lastName}</Table.Column>
              <Table.Column>{student.firstName}</Table.Column>
              <Table.Column>{student.course}</Table.Column>
              <Table.Column>{student.birthdate}</Table.Column>
              <Table.Column>{calculateAge(student.birthdate)}</Table.Column>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Column colSpan="5">No students found</Table.Column>
          </Table.Row>
        )}
      </Table.TBody>
    </Table.TableContainer>
  )
}

export default DataTable