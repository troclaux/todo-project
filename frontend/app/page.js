"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  // useEffect(() => {
  //   async function fetchTasks() {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/v1/tasks');
  //       const data = await response.json();
  //       setTasks(data.tasks);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchTasks();
  // }, []);

  // if (!tasks) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Tasks</h1>
    </div>
  );
}

