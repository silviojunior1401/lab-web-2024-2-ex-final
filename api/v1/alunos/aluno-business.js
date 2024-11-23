const listaAlunos = [];
const { Aluno: alunoModel } = require("./aluno-model");

const save = async (aluno) => {
    const savedAluno = await alunoModel.create(aluno);

    return savedAluno;
};

const list = async (filters) => {
    const alunos = await alunoModel.findAll({ where: filters });

    return alunos;
};

module.exports = { save, list };
