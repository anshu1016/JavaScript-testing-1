import "./styles.css";

export default function App() {
  const students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Carol", age: 25 }
  ];

  const groupByProperty = (students, property) => {
    return students.reduce((grouped, currentObject) => {
      const propValue = currentObject[property];
      if (!grouped[propValue]) {
        grouped[propValue] = [];
      }
      grouped[propValue].push(currentObject);
      console.log(grouped);
      return grouped;
    }, {});
  };
  groupByProperty(students, "age");

  return (
    <div className="App">
      <h1>tanaypratap's box</h1>
      <h2>write your app here</h2>
    </div>
  );
}
