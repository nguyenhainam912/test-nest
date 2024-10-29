const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const thead = $('.table> thead');
const tbody = $('.table> tbody');

async function fetchRepos(language) {
  try {
    const response = await fetch(
      `http://localhost:8888/api/v1/repos?language=${language}`,
    );
    const data = await response.json();
    return JSON.parse(data?.data); // Return the fetched data (calendar)
  } catch (e) {
    console.log(e); // Handle errors
    return undefined; // Or return a default value for error cases
  }
}

const fetchTableRepos = async (language) => {
  try {
    let data = await fetchRepos(language);
    if (data.length == 0) {
      thead.innerHTML = ``;
      tbody.innerHTML = ``;
      return;
    }
    console.log(data);

    thead.innerHTML = `
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">language</th>
            <th scope="col">Forks</th>
            <th scope="col">Count</th>
            </tr>
        `;

    tbody.innerHTML = '';
    data.forEach((el, index) => {
      tbody.innerHTML += `
              <tr class="${el._id}">
                <th scope="row">${index + 1}</th>
                <td>${el.name}</td>
                <td>${el.description ?? ''}</td>
                <td>${el.language}</td>
                <td>${el.forks}</td>
                <td>${el.forks_count}</td>
              </tr>
            `;
    });
  } catch (error) {
    console.log(error.message);
  }
};

const filter = $('.form-select');
filter.addEventListener('change', async () => {
  fetchTableRepos(filter.value);
});

await fetchTableRepos('');
