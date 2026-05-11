CREATE DATABASE CENTROASIGNACION;
USE CENTROASIGNACION

CREATE TABLE TipoRecinto(
id_tipo INT IDENTITY(1,1),
nombre VARCHAR (30) NOT NULL
)

CREATE TABLE RECINTO(
id_recinto INT IDENTITY PRIMARY KEY,
numero VARCHAR (10) NOT NULL UNIQUE,
descripcion TEXT,
id_tipo INT NOT NULL,
capacidad INT NOT NULL,
edificio VARCHAR(100) NOT NULL
);

CREATE TABLE Asignacion(
id_asignacion INT IDENTITY (1,1),
id_recinto INT NOT NULL,
fecha_inicio DATE NOT NULL,
fecha_fin DATE NOT NULL,
hora_inicio TIME NOT NULL,
hora_fin TIME NOT NULL,
motivo TEXT NOT NULL,
responsable VARCHAR (100) NOT NULL

);

ALTER TABLE TipoRecinto
ADD CONSTRAINT PK_TipoRecinto PRIMARY KEY (id_tipo)
;

ALTER TABLE TipoRecinto
ADD CONSTRAINT UQ_TipoRecinto_Nombre UNIQUE (nombre);



ALTER TABLE Recinto
ADD CONSTRAINT  UQ_Recinto_Numero UNIQUE(numero);

ALTER TABLE Recinto ADD CONSTRAINT FK_Recinto_Tipo FOREIGN KEY (id_tipo)
REFERENCES TipoRecinto(id_tipo);

ALTER TABLE Recinto
ADD CONSTRAINT CHK_Capacidad_Mayor_Cero CHECK (capacidad>0);

ALTER TABLE  ASIGNACION
ADD CONSTRAINT PK_Asingnacion PRIMARY KEY (ID_ASIGNACION);

Alter TABLE Asignacion 
ADD CONSTRAINT FK_Asignacion_Recinto FOREIGN KEY (id_recinto)
REFERENCES Recinto(id_Recinto);


INSERT TipoRecinto (nombre) VALUES
('AULA'),
('LABORATORIO'),
('COMEDOR'),
('GIMNASIO'),
('TALLER');

INSERT INTO RECINTO(numero, descripcion,id_tipo,capacidad,edificio) VALUES
('A101','Aula para matematicas', 1,35, 'Edificiio A'),
('L201','Laboratorio de computo', 2,35, 'Edificiio B '),
('C301','Comedor principal', 2,100, 'Edificiio Central'),
('G101','Gimnasio Multiuso', 4,200, 'Edificiio Deportivo'),
('T401','Taller de mecanica', 5,20, 'Edificiio de Talleres');


INSERT INTO Asignacion (id_recinto, fecha_inicio, fecha_fin, hora_inicio, hora_fin, motivo, responsable) VALUES
(1, '20250505', '20250505', '08:00', '10:00', 'Clase de Matematicas', 'Profesor Emmanuel Montero'),
(2, '20250506', '20250506', '10:00', '12:00', 'Taller de programacion', 'Licda. Ana Torres'),
(4, '20250506', '20250506', '13:00', '15:00', 'Taller de programacion', 'Entrenador Juan Perez'),
(5, '20250507', '20250507', '08:00', '11:00', 'Practica de Mecanica', 'Ing. Jose Gomez');


UPDATE Asignacion
SET responsable = 'Profesor Luis Ramirez'
WHERE id_asignacion= 1;


UPDATE Asignacion
SET motivo='Educacin fisica'
WHERE id_recinto=4

UPDATE RECINTO
SET capacidad = 40
WHERE id_recinto= 1


DELETE FROM Asignacion
WHERE id_asignacion  = 2;

Select * from Asignacion

Select a.id_asignacion,
r.numero AS numero_recinto,
r.descripcion,
tr.nombre AS tipo_recinto,
a.fecha_inicio,
a.fecha_fin,
a.hora_inicio,
a.hora_fin,
a.motivo,
a.responsable
FROM Asignacion a
JOIN Recinto r ON a.id_recinto=r.id_recinto
JOIN TipoRecinto tr ON r.id_tipo = tr.id_tipo

Select a.id_asignacion,
r.numero AS numero_recinto,
r.descripcion,
a.fecha_inicio,
a.fecha_fin,
a.hora_inicio,
a.hora_fin,
a.motivo,
a.responsable
FROM Asignacion a
JOIN RECINTO R ON a.id_recinto= r.id_recinto
WHERE a.fecha_inicio>= CAST(GETDATE()AS DATE)

select motivo,
UPPER (CAST(motivo AS VARCHAR(MAX)))
responsable,
LEN (responsable) AS longitud_nombre_responsable
FROM Asignacion;

select * from Asignacion
CREATE VIEW Vista_Resumen AS 
SELECT 
r.numero AS numero_recinto,
r.descripcion,
tr.nombre AS tipo_recinto,
r.capacidad,
r.edificio
FROM RECINTO r
JOIN TipoRecinto tr ON r.id_tipo= tr.id_tipo


SELECT * FROM Vista_Resumen


SELECT * FROM Asignacion
















