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
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AP', 'Amap�');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('AM', 'Amazonas');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('BA', 'Bahia');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('CE', 'Cear�');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('DF', 'Distrito Federal');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('ES', 'Esp�rito Santo');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('GO', 'Goi�s');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MA', 'Maranh�o');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MT', 'Mato Grosso');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MS', 'Mato Grosso do Sul');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('MG', 'Minas Gerais');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PA', 'Par�');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PB', 'Para�ba');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PR', 'Paran�');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PE', 'Pernambuco');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('PI', 'Piau�');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RJ', 'Rio de Janeiro');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RN', 'Rio Grande do Norte');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RS', 'Rio Grande do Sul');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RO', 'Rond�nia');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('RR', 'Roraima');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SC', 'Santa Catarina');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SP', 'S�o Paulo');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('SE', 'Sergipe');
		INSERT INTO Estado (Sigla, Descricao) VALUES ('TO', 'Tocantins');
	END
GO


--Criar tabela Ponto Tur�stico
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