const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// Banco de dados do SQLite

const db = new sqlite3.Database('banco.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Bando de dados conectado com sucesso!');
    }
});

// Criando a tabela do banco de dados

db.run(`
CREATE TABLE IF NOT EXISTS cidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    imagem TEXT,
    microrregiao TEXT NOT NULL,
    estado VARCHAR(20) NOT NULL,
    descricao TEXT,
    descricao-en TEXT
)
`, (err) => {
    if (err) {
        console.error("Erro na tabela cidades:", err.message);
    } else {
        console.log("Tabela cidades criada!");
    }
});

db.run(`
CREATE TABLE IF NOT EXISTS pontos_turisticos (
    id_ponto INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cidade INTEGER NOT NULL,
    nome TEXT NOT NULL,
    imagem_principal TEXT,
    localizacao TEXT NOT NULL,
    categoria TEXT,
    latitude REAL,
    longitude REAL,
    descricao TEXT NOT NULL,
    descricao-en TEXT,
    FOREIGN KEY (id_cidade) REFERENCES cidades(id)
)
`, (err) => {
    if (err) {
        console.error("Erro na tabela pontos_turisticos:", err.message);
    } else {
        console.log("Tabela pontos turisticos criada!");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS curiosidades(
        id_curiosidade INTEGER PRIMARY KEY AUTOINCREMENT,
        id_pontos_turisticos INTEGER NOT NULL,
        curiosidade TEXT NOT NULL,
        curiosidade-en TEXT,
        FOREIGN KEY (id_pontos_turisticos) REFERENCES pontos_turisticos(id_ponto
        )
`, (err) => {
    if (err) {
        console.error("Erro na tabela curiosidades:", err.message);
    } else {
        console.log("Tabela curiosidades criada!");
    }
});

// Iniciando o servidor