import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import model from "../models";
const { user, task } = model;
export default {
  async signup(body) {
    try {
      const { name, email, password, role } = body;
      if (email) {
        const userData = await user.findOne({ where: { email } });
        if (userData) {
          return "User already exists";
        }
      }
      const hashPassword = await bcrypt.hash(password, 10);
      return await user.create({ ...body, password: hashPassword });
    } catch (error) {
      console.log(error);
    }
  },
  async signin(body) {
    try {
      const { email, password } = body;
      const userData = await user.findOne({ where: { email } });
      if (!userData) {
        return "User not found";
      }
      const isValid = await bcrypt.compare(password, userData.password);
      if (!isValid) {
        return "Invalid password";
      }
      const token = jwt.sign(
        {
          userData,
        },
        process.env.JWT_SECRET || "test",
        {
          expiresIn: "1d",
        }
      );
      return {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        token,
      };
    } catch (error) {
      console.log(error);
    }
  },
  async createtask(body) {
    try {
      return await task.create(body);
    } catch (error) {
      console.log(error);
    }
  },
  async gettask() {
    try {
      return await task.findAndCountAll();
    } catch (error) {
      console.log(error);
    }
  },
  async getTaskById(id) {
    try {
      const data = await task.findOne({ where: { id } });
      if (!data) {
        return "Task not found";
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTaskById(id, body) {
    try {
      const data = await task.findOne({ where: { id } });
      if (!data) {
        return "Task not found";
      }
      return await data.update(body, { where: { id } });
    } catch (error) {
      console.log(error);
    }
  },
};
