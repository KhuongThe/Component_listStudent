import Students from "./components/Students";

let studentsInfo = [
  { id: 5, name: "Tuấn", age: 23, address: "74 Ngô Văn Sở - Gia Lâm" },
  { id: 8, name: "Phong", age: 21, address: "125 Trần Quang Khải - Hoàn Kiếm" },
  { id: 12, name: "Khánh", age: 25, address: "12A Lê Duẩn - Đống Đa" },
  { id: 18, name: "Long", age: 28, address: "80B Lý Nam Đế - Ba Đình" },
];

function App() {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      <Students Arr={studentsInfo} />
    </table>
  );
}

export default App;
