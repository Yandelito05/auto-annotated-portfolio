CREATE DATABASE GimnasioDB;
USE GimnasioDB;
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    FechaNacimiento DATE,
    Telefono NVARCHAR(20),
    Email NVARCHAR(100),
    Activo BIT DEFAULT 1 -- 1 = activo, 0 = inactivo
);
CREATE TABLE Instructores (
    InstructorID INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    Especialidad NVARCHAR(100),
    Email NVARCHAR(100)
);
CREATE TABLE Suscripciones (
    SuscripcionID INT PRIMARY KEY IDENTITY,
    ClienteID INT NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaFin DATE,
    Estado NVARCHAR(20) NOT NULL CHECK (Estado IN ('Activa', 'Inactiva')),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
CREATE TABLE Pagos (
    PagoID INT PRIMARY KEY IDENTITY,
    SuscripcionID INT NOT NULL,
    FechaPago DATE NOT NULL,
    Monto DECIMAL(10, 2) NOT NULL,
    TipoPago NVARCHAR(50) CHECK (TipoPago IN ('Matrícula', 'Mensualidad')),
    FOREIGN KEY (SuscripcionID) REFERENCES Suscripciones(SuscripcionID)
);
CREATE TABLE Rutinas (
    RutinaID INT PRIMARY KEY IDENTITY,
    ClienteID INT NOT NULL,
    InstructorID INT NOT NULL,
    FechaAsignacion DATE NOT NULL,
    Mes INT NOT NULL,
    Año INT NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (InstructorID) REFERENCES Instructores(InstructorID)
);
CREATE TABLE TiposEjercicio (
    TipoEjercicioID INT PRIMARY KEY IDENTITY,
    NombreTipo NVARCHAR(50) NOT NULL 
);

CREATE TABLE Ejercicios (
    EjercicioID INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(100) NOT NULL,
    Descripcion NVARCHAR(255),
    TipoEjercicioID INT NOT NULL,
    FOREIGN KEY (TipoEjercicioID) REFERENCES TiposEjercicio(TipoEjercicioID)
);
CREATE TABLE DetallesRutina (
    DetalleID INT PRIMARY KEY IDENTITY,
    RutinaID INT NOT NULL,
    EjercicioID INT NOT NULL,
    Repeticiones INT,
    Rondas INT,
    FOREIGN KEY (RutinaID) REFERENCES Rutinas(RutinaID),
    FOREIGN KEY (EjercicioID) REFERENCES Ejercicios(EjercicioID)
);
INSERT INTO Clientes(Nombre,Apellido,FechaNacimiento,Telefono,Email)
VALUES
('Juan', 'Pérez', '1990-05-12', '1234567890', 'juan.perez@email.com'),
('María', 'Gómez', '1985-08-22', '1234567891', 'maria.gomez@email.com'),
('Pedro', 'López', '1992-11-03', '1234567892', 'pedro.lopez@email.com'),
('Laura', 'Martínez', '1995-02-14', '1234567893', 'laura.martinez@email.com'),
('Sofía', 'Rodríguez', '1989-07-08', '1234567894', 'sofia.rodriguez@email.com'),
('Diego', 'Fernández', '1993-03-19', '1234567895', 'diego.fernandez@email.com'),
('Ana', 'Torres', '1991-09-30', '1234567896', 'ana.torres@email.com'),
('Lucía', 'Ramírez', '1994-01-25', '1234567897', 'lucia.ramirez@email.com'),
('Carlos', 'Sánchez', '1987-12-11', '1234567898', 'carlos.sanchez@email.com'),
('Valentina', 'Morales', '1996-06-05', '1234567899', 'valentina.morales@email.com');

INSERT INTO Instructores (Nombre, Apellido, Especialidad, Email)
VALUES 
('Allan', 'Brote', 'Fuerza', 'allan.brote@email.com'),
('Iván', 'McDonals', 'Cardio', 'ivan.mcdonals@email.com'),
('Gian', 'Chata', 'Resistencia', 'gian.chata@email.com'),
('Jorge', 'Guzman', 'Calentamiento', 'jorge.guzman@email.com'),
('Oscar', 'Lenteja', 'Fuerza', 'oscar.lenteja@email.com'),
('David', 'Canovas', 'Resistencia', 'david.canovas@email.com'),
('Dylan', 'Chiwis', 'Cardio', 'dylan.chiwis@email.com'),
('Jeremy', 'Sanchez', 'Fuerza', 'jeremy.sanchez@email.com'),
('Iamsael', 'King', 'Calentamiento', 'iamsael.king@email.com'),
('Messi', 'Ronaldo', 'Cardio', 'messi.ronaldo@email.com');

INSERT INTO TiposEjercicio (NombreTipo)
VALUES 
('Calentamiento'),
('Fuerza'),
('Resistencia'),
('Cardio'),
('Flexibilidad'),
('Movilidad'),
('HIIT'),
('Core'),
('Estiramiento'),
('Funcional');

INSERT INTO Ejercicios (Nombre,Descripcion,TipoEjercicioID)
VALUES 
('Trote suave', 'Correr lentamente durante 5 minutos', 1),
('Sentadillas', 'Ejercicio de fuerza para piernas', 2),
('Burpees', 'Ejercicio de cuerpo completo de alta intensidad', 3),
('Cuerda para saltar', 'Saltar la cuerda durante 2 minutos', 4),
('Estiramiento de piernas', 'Estirar cuádriceps y isquiotibiales', 9),
('Plancha abdominal', 'Ejercicio para fortalecer el core', 8),
('Press de banca', 'Ejercicio de fuerza para pecho', 2),
('Bicicleta fija', 'Ejercicio cardiovascular de bajo impacto', 4),
('Mountain climbers', 'Ejercicio HIIT para cuerpo completo', 7),
('Rotaciones de hombros', 'Ejercicio de movilidad articular', 6);

INSERT INTO Suscripciones (ClienteID, FechaInicio, FechaFin, Estado)
VALUES 
(1, '2024-01-01', NULL, 'Activa'),
(2, '2024-02-01', '2024-04-30', 'Inactiva'),
(3, '2024-01-15', NULL, 'Activa'),
(4, '2024-03-01', NULL, 'Activa'),
(5, '2024-01-10', '2024-03-10', 'Inactiva'),
(6, '2024-02-15', NULL, 'Activa'),
(7, '2024-01-05', NULL, 'Activa'),
(8, '2024-03-10', '2024-04-10', 'Inactiva'),
(9, '2024-01-20', NULL, 'Activa'),
(10, '2024-04-01', NULL, 'Activa');

INSERT INTO Pagos (SuscripcionID, FechaPago, Monto, TipoPago)
VALUES 
(1, '2024-01-01', 50.00, 'Matrícula'),
(1, '2024-02-01', 30.00, 'Mensualidad'),
(1, '2024-03-01', 30.00, 'Mensualidad'),
(2, '2024-02-01', 50.00, 'Matrícula'),
(2, '2024-03-01', 30.00, 'Mensualidad'),
(3, '2024-01-15', 50.00, 'Matrícula'),
(3, '2024-02-15', 30.00, 'Mensualidad'),
(4, '2024-03-01', 50.00, 'Matrícula'),
(5, '2024-01-10', 50.00, 'Matrícula'),
(6, '2024-02-15', 50.00, 'Matrícula');

INSERT INTO Rutinas (ClienteID, InstructorID, FechaAsignacion, Mes, Año)
VALUES 
(1, 1, '2024-04-01', 4, 2024),
(3, 2, '2024-04-01', 4, 2024),
(4, 3, '2024-04-01', 4, 2024),
(6, 4, '2024-04-01', 4, 2024),
(7, 5, '2024-04-01', 4, 2024),
(9, 6, '2024-04-01', 4, 2024),
(10, 7, '2024-04-01', 4, 2024),
(1, 8, '2024-05-01', 5, 2024),
(3, 9, '2024-05-01', 5, 2024),
(4, 10, '2024-05-01', 5, 2024);

INSERT INTO DetallesRutina (RutinaID, EjercicioID, Repeticiones, Rondas)
VALUES 
(1, 1, 1, 1),
(1, 2, 12, 3),
(1, 6, 1, 2),
(2, 4, 2, 2),
(2, 7, 10, 4),
(3, 3, 15, 3),
(4, 5, 1, 1),
(5, 8, 1, 3),
(6, 9, 20, 3),
(7, 10, 1, 2);

UPDATE Clientes
SET Apellido = 'GUDMAN'
WHERE ClienteID = 1;

UPDATE Suscripciones
SET Estado ='Inactiva', FechaFin= '2024-05-01'
WHERE SuscripcionID=2;

UPDATE DetallesRutina
SET Rondas=4
WHERE DetalleID=2;

UPDATE Instructores
SET Especialidad= 'HIIT'
WHERE InstructorID= 3;

UPDATE Pagos
SET Monto= 35.00
WHERE PagoID=2

DELETE FROM DetallesRutina
WHERE DetalleID = 8;

DELETE FROM Pagos
WHERE PagoID = 9;

DELETE FROM Pagos
WHERE SuscripcionID = 4;

DELETE FROM Suscripciones
WHERE SuscripcionID = 4;

DELETE FROM DetallesRutina
WHERE EjercicioID = 10;

DELETE FROM Ejercicios
WHERE EjercicioID = 10;

SELECT C.Nombre AS Cliente, E.Nombre AS Ejercicio, TE.NombreTipo AS Tipo,
       DR.Repeticiones, DR.Rondas
FROM DetallesRutina DR
JOIN Rutinas R ON DR.RutinaID = R.RutinaID
JOIN Clientes C ON R.ClienteID = C.ClienteID
JOIN Ejercicios E ON DR.EjercicioID = E.EjercicioID
JOIN TiposEjercicio TE ON E.TipoEjercicioID = TE.TipoEjercicioID;

SELECT C.Nombre, C.Apellido, S.Estado, MAX(P.FechaPago) AS UltimoPago
FROM Clientes C
JOIN Suscripciones S ON C.ClienteID = S.ClienteID
JOIN Pagos P ON S.SuscripcionID = P.SuscripcionID
WHERE S.Estado = 'Activa'
GROUP BY C.Nombre, C.Apellido, S.Estado;

SELECT C.Nombre, C.Apellido, S.Estado, MAX(P.FechaPago) AS UltimoPago
FROM Clientes C
JOIN Suscripciones S ON C.ClienteID = S.ClienteID
JOIN Pagos P ON S.SuscripcionID = P.SuscripcionID
WHERE S.Estado = 'INACTIVA'
GROUP BY C.Nombre, C.Apellido, S.Estado;

SELECT I.Nombre + ' ' + I.Apellido AS Instructor, COUNT(R.RutinaID) AS TotalRutinas
FROM Instructores I
LEFT JOIN Rutinas R ON I.InstructorID = R.InstructorID
GROUP BY I.Nombre, I.Apellido;

SELECT C.ClienteID, C.Nombre, SUM(P.Monto) AS TotalPagado
FROM Clientes C
JOIN Suscripciones S ON C.ClienteID = S.ClienteID
JOIN Pagos P ON S.SuscripcionID = P.SuscripcionID
GROUP BY C.ClienteID, C.Nombre;

SELECT C.ClienteID, C.Nombre + ' ' + C.Apellido AS Cliente, COUNT(R.RutinaID) AS CantidadRutinas
FROM Clientes C
JOIN Rutinas R ON C.ClienteID = R.ClienteID
GROUP BY C.ClienteID, C.Nombre, C.Apellido
HAVING COUNT(R.RutinaID) > 1;

CREATE VIEW Vista_RutinasCliente AS
SELECT C.Nombre + ' ' + C.Apellido AS Cliente,
       R.Mes, R.Año,
       E.Nombre AS Ejercicio,
       DR.Repeticiones, DR.Rondas
FROM Rutinas R
JOIN Clientes C ON R.ClienteID = C.ClienteID
JOIN DetallesRutina DR ON R.RutinaID = DR.RutinaID
JOIN Ejercicios E ON DR.EjercicioID = E.EjercicioID;

CREATE VIEW Vista_PagosClientes AS
SELECT C.ClienteID, C.Nombre + ' ' + C.Apellido AS Cliente,
       P.TipoPago, P.Monto, P.FechaPago
FROM Clientes C
JOIN Suscripciones S ON C.ClienteID = S.ClienteID
JOIN Pagos P ON S.SuscripcionID = P.SuscripcionID;

CREATE VIEW Vista_InstructoresRutinas AS 
SELECT I.Nombre + ' ' + I.Apellido AS Instructor,
       C.Nombre + ' ' + C.Apellido AS Cliente,
       R.Mes, R.Año
FROM Rutinas R
JOIN Instructores I ON R.InstructorID = I.InstructorID
JOIN Clientes C ON R.ClienteID = C.ClienteID;


SELECT * FROM Vista_InstructoresRutinas;














