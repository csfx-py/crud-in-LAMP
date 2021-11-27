const url = "http://localhost/api";

const resetForm = () => {
  document.addForm.reset();
};

const addUser = async () => {
  let headersList = {
    Accept: "*/*",
  };

  let formdata = new FormData();
  formdata.append("firstName", document.addForm.firstName.value);
  formdata.append("lastName", document.addForm.lastName.value);
  formdata.append("email", document.addForm.email.value);
  formdata.append("address", document.addForm.address.value);

  const raw = await fetch(url + "/create.php", {
    method: "POST",
    body: formdata,
    headers: headersList,
  });

  resetForm();
  const content = await raw.text();
  document.getElementById("status").innerHTML = content;
};

const getUsers = async () => {
  let headersList = {
    Accept: "*/*",
  };

  const raw = await fetch(url + "/read.php", {
    method: "GET",
    headers: headersList,
  });

  const content = await raw.json();

  // map through the data and create a list for each user
  content.map((user) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>First name: ${user.first_name}</li>
                    <li>Last name: ${user.last_name}</li>
                    <li>Address: ${user.address}</li>
                    <li>Email: ${user.email}</li>`;
    document.getElementById("result").appendChild(ul);
  });
};

const updateUser = async () => {
  let headersList = {
    Accept: "*/*",
  };

  let formdata = new FormData();
  formdata.append("Id", document.addForm.Id.value);
  formdata.append("firstName", document.addForm.firstName.value);
  formdata.append("lastName", document.addForm.lastName.value);
  formdata.append("email", document.addForm.email.value);
  formdata.append("address", document.addForm.address.value);

  const raw = await fetch(url + "/update.php", {
    method: "POST",
    body: formdata,
    headers: headersList,
  });

  resetForm();
  const content = await raw.text();
  document.getElementById("status").innerHTML = content;
};

const deleteUser = async () => {
  let headersList = {
    Accept: "*/*",
  };

  let formdata = new FormData();
  formdata.append("firstName", document.addForm.firstName.value);

  const raw = await fetch(url + "/delete.php", {
    method: "POST",
    body: formdata,
    headers: headersList,
  });

  resetForm();
  const content = await raw.text();
  document.getElementById("status").innerHTML = content;
};
