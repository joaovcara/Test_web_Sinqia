<h1>
  Crud com Net 6.0 e React JS
</h1>

## Objetivo
<div style="display: flex; justify-content: center">  
  <p style="text-align: left">Este projeto tem como foco principal, apresentar minhas habilidades e competências em desenvolvimento de software.</p>
</div>

## Vídeo de Demonstração

https://github.com/joaovcara/Test_web_Sinqia/assets/62843342/bb60afba-c062-474f-b8e8-435fc5e88dac

## Tecnologias
<div style="display: flex; justify-content: center">
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/html.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/css.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/js.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/csharp.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/sql.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/react.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/mui.png?raw=true" height="85px"/>
</div>

## Instruções para executar o projeto  
<div>
  <p>Ferramentas utilizadas</p>
  <ul>
    <li>Visual Studio 2022</li>
    <li>Visual Studio Code</li>
    <li>SQL Server Management Studio</li>  
  <ul>
</div>

### Utilitários

  <p style="text-align: left">*Considero que já tenha o git instalado.*</p>
  
  <p style="text-align: left">Realizar seguintes instalações</p>

  <ul>
    <li>NPM v10.1.0</li>
    <li>Node v18.18.0</li>
  </ul>
  
## Instalação e execução:

Na primeira vez que for utilizar, faça um clone deste repositório:

```bash
$ git clone https://github.com/joaovcara/Test_web_Sinqia.git
```

### Criando Banco de dados (Sql Server)

  <p style="text-align: left">Execute o script SQL <strong>SqlBase.sql</strong> dentro da pasta db, este script irá criar o banco de dados, tabelas e inserir dados padrões.</p>

  #### Configurando banco de dados na API
  <p style="text-align: left">Abrir o projeto <strong>api</strong> no Visual Studio, e editar o arquivo <strong>appsettings.json</strong>, colocando a sua instância do SqlServer.</p>

  ```bash
  "ConnectionStrings": {
    "TestSinqia": "Server=<SUA_INSTANCIA_SQL>; Database=TestSinqia; Integrated Security=True; trustServerCertificate=true"
  }
  ```  

### Rodando o projeto
  <p style="text-align: left">Executar a API no Visual Studio com IIS. a mesma está configurada para ser executada via IIS e acessada localhost na porta 44332.
  </p>

  <p style="text-align: left">Para executar o front end abra o projeto no Visual Studio Code ou abra um terminal na pasta <strong>app</strong> do projeto.</p>

  <p>Execute o seguinte comando:</p>

  ```bash
  $ npm start
  ```

  <p>Seguindo estes passos o projeto estará rodando API e FrontEnd com banco  de dados já criado, sendo possível acessar no navegador.</p>

## Imagens
 <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/photos/HomeSystem.png?raw=true" height="auto"/>
 <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/photos/PontoTuristico.png?raw=true" height="auto"/>
  
  
