import repository from "../repositories";

const { authRepository } = repository;
export default {
  async signup(req, res, next) {
    try {
      const { body } = req;
      const result = await authRepository.signup(body);
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
  async signin(req, res, next) {
    try {
      const { body } = req;
      const result = await authRepository.signin(body);
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
  async createtask(req, res, next) {
    try {
      const { body } = req;
      const result = await authRepository.createtask(body);
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
  async gettask(req, res, next) {
    try {
      const result = await authRepository.gettask();
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
  async getTaskById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await authRepository.getTaskById(id);
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
  async updateTaskById(req, res, next) {
    try {
      const { id } = req.params;
      const { body } = req;
      const result = await authRepository.updateTaskById(id, body);
      res.status(200).json({
        data: result,
        message: "Success",
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "Error",
        success: false,
      });
    }
  },
};
