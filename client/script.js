const fetchdData = () => {
  fetch("http://localhost:8000/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetchdData();
