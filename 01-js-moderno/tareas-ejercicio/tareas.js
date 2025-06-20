// Módulo de tareas usando ES6+
// Provee funciones para obtener, agregar y eliminar tareas usando localStorage
import {  } from './main.js';
const STORAGE_KEY = 'tasks'; // Clave para localStorage

// Devuelve la lista de tareas almacenadas
export function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export const valor = 'incompleto';
export const comvalor = 'completado';

export const isComplete = false; // Valor booleano inicial

// Agrega una tarea nueva y la guarda en localStorage
export function addTask(task) {
  const tasks = getTasks();
  localStorage.setItem("complete",isComplete);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Elimina una tarea por índice y actualiza localStorage
export function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
