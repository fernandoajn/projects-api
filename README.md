<h1 align="center"> 
  <span style="font-size: 70px">📂📝</span>
  </br>
  Projects
</h1>

<div align="center">
  <h4>Save your projects and their tasks to do.</h4>
  <sub>
    This basic project was made to study Express and see how it performs.
  </sub>
</div>

<hr>

### Installation
1. Clone this repository by running:
  <pre><code> git clone https://github.com/fernandoajn/projects-api.git</code></pre>
2. Install the dependencies and start the application:
  <pre><code>yarn install && yarn start</code></pre>
3. The server is going to run at port `8000`.

#### Customization
You can change the default port on the last function at `src/index.js` by changing the first parameter from `8000` to yours.

### How to use
The server can handle these routes in JSON format:

##### GET /projects
>Returns all projects.

##### POST /projects
>Receives a `id` and `title` containing the project's id and name.

##### POST /projects/:id/tasks
>Receives a `title` and adds it to the project's tasks.

##### PUT /projects/:id
>Receives a `title` containing the new project's name.

##### DELETE /projects/:id
>Delete a project
