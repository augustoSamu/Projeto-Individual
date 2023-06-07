create database shrek;
use shrek;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(40)
);

create table dados (
idDados int primary key auto_increment,
email varchar(30),
senha varchar(20),
fkUsuario int,
constraint fkDadosUsuario foreign key (fkUsuario)
	references usuario (idUsuario)
);

create table jogo1 (
idJogo1 int primary key auto_increment,
acertos int,
fkUsuario int,
constraint fkJogo1Usuario foreign key (fkUsuario)
	references usuario (idUsuario)
);

create table jogo2 (
idJogo2 int primary key auto_increment,
acertos int,
fkUsuario int,
constraint fkJogo2Usuario foreign key (fkUsuario)
	references usuario (idUsuario)
);

insert into usuario values 
	(null, 'samuca'),
	(null, 'kelvin');
    
insert into dados values 
	(null, 'samuel@email.com', '12345789', 1),
	(null, 'kelvin@email.com', 'qwerty', 2);
    
insert into jogo1 values
	(null, 15, 1),
	(null, 22, 2);
    
insert into jogo2 values
	(null, 8, 1),
	(null, 5, 2);
    
select 
nome Nome,
email Email,
j1.acertos 'Pontuacao jogo 1',
j2.acertos 'Pontuacao jogo 2'
 from usuario join dados as d
	on idUsuario = d.fkUsuario
    join jogo1 as j1
    on idUsuario = j1.fkUsuario
    join jogo2 as j2
    on idUsuario = j2.fkUsuario;