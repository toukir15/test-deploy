import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Resource not found',
  })
}

export default notFound
