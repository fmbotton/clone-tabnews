function status(request, response) {
  response.status(200).json({ string: "O site está funcional" });
}

export default status;
