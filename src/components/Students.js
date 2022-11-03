
      
      
      function Students(props){
      return(
      props.Arr.map((item) =>
      <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.address}</td>
      </tr>
      )
      )
      };
      export default Students;