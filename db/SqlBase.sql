--Criar Banco de dados
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name='TestSinqia')
	BEGIN 
		CREATE DATABASE TestSinqia;
	END
GO

USE [TestSinqia]
GO

--Criar table Estado
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Estado' and xtype='U')
	BEGIN
		CREATE TABLE Estado (
			Id	      INT PRIMARY KEY IDENTITY,
			Sigla     VARCHAR(2)   NOT NULL,
			Descricao VARCHAR(100) NOT NULL
		);
	
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AC', 'Acre');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AL', 'Alagoas');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AP', 'Amapá');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AM', 'Amazonas');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('BA', 'Bahia');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('CE', 'Ceará');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('DF', 'Distrito Federal');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('ES', 'Espírito Santo');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('GO', 'Goiás');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MA', 'Maranhão');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MT', 'Mato Grosso');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MS', 'Mato Grosso do Sul');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MG', 'Minas Gerais');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PA', 'Pará');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PB', 'Paraíba');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PR', 'Paraná');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PE', 'Pernambuco');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PI', 'Piauí');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RJ', 'Rio de Janeiro');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RN', 'Rio Grande do Norte');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RS', 'Rio Grande do Sul');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RO', 'Rondônia');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RR', 'Roraima');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SC', 'Santa Catarina');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SP', 'São Paulo');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SE', 'Sergipe');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('TO', 'Tocantins');
	END
GO


--Criar tabela Ponto Turístico
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='PontoTuristico' and xtype='U')
	BEGIN
		CREATE TABLE PontoTuristico (
			Id			 INT PRIMARY KEY IDENTITY,
			Nome		 VARCHAR(100) NOT NULL,
			Descricao	 VARCHAR(100) NOT NULL,
			Localizacao  VARCHAR(200) NOT NULL,
			Cidade		 VARCHAR(100) NOT NULL,
			DataInclusao DATETIME	  NOT NULL,
			IdEstado	 INT		  NOT NULL
		);
	END
GO