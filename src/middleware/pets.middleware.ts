import type {Request, Response, NextFunction} from "express";

export const validNumericId = (
  req: Request<{id:string}>,
  res: Response<{message:string}>,
  next: NextFunction
):void => {
  const {id} = req.params
  if (!/^\d+$/.test(id)) {
    res.status(400).json({message: "Pet ID must be a number."})
  } else {
    next()
  }
}

export const pleaseAuth = (
  req: Request<{}, unknown, {}, {password?:string}>,
  res: Response<{message:string}>,
  next: NextFunction
):void => {
  const {password} = req.query
  if (password?.toLowerCase() !== "please") {
    res.status(400).json({message: "Unauthorized. You must say please."})
  } else {
    next()
  }

}