const fetchdData = () => {
  fetch("http://localhost:9000/data")
    .then((res) => res.json())
    .then((data) => (document.getElementById("data").innerText = data));
};

fetchdData();
