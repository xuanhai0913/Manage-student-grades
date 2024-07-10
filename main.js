"use strict";

function renderStudent(student) {
    let html = '<tr class="student">';
    html += `<td>${student.id}</td>`;
    html += `<td>${student.name}</td>`;
    html += `<td>${student.class}</td>`;
    html += '</tr>';

    return html;
}

function renderStudents(students) {
    let html = '';
    for (let i = 0; i < students.length; i++) {
        html += renderStudent(students[i]);
    }
    return html;
}

function updateStudents(e) {
    e.preventDefault(); 
    const selectedClass = classSelection.value;
    const searchKeyword = searchKeywordInput.value.toLowerCase();
    const filteredStudents = students.filter(student => {
        return (selectedClass === 'all' || student.class === selectedClass) && student.name.toLowerCase().includes(searchKeyword);
    });
    tbody.innerHTML = renderStudents(filteredStudents);
}

// Dữ liệu về sinh viên
const students = [
    {id: 1, name: 'Nguyen Van A', class: 'K62'},
    {id: 2, name: 'Tran Thi B', class: 'K62'},
    {id: 3, name: 'Le Van C', class: 'K62'},
    {id: 4, name: 'Pham Thi D', class: 'K63'},
    {id: 5, name: 'Hoang Van E', class: 'K63'},
    {id: 6, name: 'Ngo Thi F', class: 'K63'},
    {id: 7, name: 'Vu Van G', class: 'K64'},
    {id: 8, name: 'Do Thi H', class: 'K64'},
    {id: 9, name: 'Dang Van I', class: 'K64'},
    {id: 10, name: 'Bui Thi J', class: 'K64'},
    {id: 11, name: 'Cao Van K', class: 'K65'},
    {id: 12, name: 'Nguyen Thi L', class: 'K65'},
    {id: 13, name: 'Phan Van M', class: 'K65'},
    {id: 14, name: 'Tran Thi N', class: 'K65'},
];

const tbody = document.querySelector('#students');
const submitButton = document.querySelector('#submit');
const classSelection = document.querySelector('#class-selection');
const searchKeywordInput = document.querySelector('#search-keyword');

tbody.innerHTML = renderStudents(students);

submitButton.addEventListener('click', updateStudents);
searchKeywordInput.addEventListener('input', updateStudents);
classSelection.addEventListener('change', updateStudents);
