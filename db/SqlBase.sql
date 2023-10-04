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