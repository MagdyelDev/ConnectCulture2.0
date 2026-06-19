CREATE TABLE Cidade (
    id_cidade INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    microrregiao VARCHAR(100),
    estado VARCHAR(50),
    descricao_br TEXT,
    descricao_en TEXT
);
CREATE TABLE PontoTuristico (
    id_ponto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao_br TEXT,
    descricao_en TEXT,
    cidade_id INT,
    FOREIGN KEY (cidade_id) REFERENCES Cidade(id_cidade)
);

create 


