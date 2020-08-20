const { uuid } = require("uuidv4");

const projects = [];

module.exports = {
  index(req, res) {
    const { title } = req.query;

    const results = title
      ? projects.filter((item) => item.title == title)
      : projects;

    return res.json(results);
  },
  store(req, res) {
    const { title, owner } = req.body;

    const project = {
      id: uuid(),
      title,
      owner,
    };

    projects.push(project);

    return res.status(201).json(project);
  },
  update(req, res) {
    const { title, owner } = req.body;
    const { id } = req.params;

    const projectIndex = projects.findIndex((item) => item.id == id);

    if (projectIndex == -1) {
      return res.status(404).json({ error: "Project not found" });
    }

    const project = { id, title, owner };
    projects[projectIndex] = project;

    return res.status(202).json(project);
  },
  destroy(req, re) {
    const { id } = req.params;

    const findByindex = projects.findIndex((item) => item.id == id);

    if (findByindex == -1) {
      return res.status(404).json({ error: "Project not found" });
    }

    projects.splice(findByindex, 1);

    return res.status(204).json();
  },
};
