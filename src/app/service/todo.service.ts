import { Injectable } from '@angular/core';
import axios from 'axios';

interface appointment {
  id: string;
  name: string;
  title: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  // public appointments: appointment[] = [];
  public newAppointment: appointment[] = [];

  // addToDo(name: string, title: string, desc: string, date: string) {
  //   this.appointments.push({
  //     id: title + date,
  //     title: title,
  //     description: desc,
  //     date: date,
  //   });

  //   console.log(this.appointments);
  // }

  updateAppointments(id: string) {
    this.newAppointment = this.newAppointment.filter((item) => item.id != id);
  }

  // -------------POst Data -----------------

  async postData(url: string, data: any) {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  postTodoData = async (
    name: string,
    title: string,
    desc: string,
    date: string
  ) => {
    const data = {
      id: title + date,
      name: name,
      title: title,
      description: desc,
      date: date,
    };
    await this.postData(
      'https://angular-todo-d88ad-default-rtdb.firebaseio.com/todo.json',
      data
    );
  };

  async fetchData() {
    try {
      const response = await axios.get(
        'https://angular-todo-d88ad-default-rtdb.firebaseio.com/todo.json'
      );
      const data = response.data;

      for (const id in data) {
        this.newAppointment.push({
          id: id,
          name: data[id].name,
          title: data[id].title,
          description: data[id].description,
          date: data[id].date,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
