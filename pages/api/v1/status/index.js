function status(request, response) {
  response.status(200).json({ chave: "O site está funcional" });
}

export default status;
