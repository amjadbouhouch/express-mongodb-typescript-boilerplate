import BaseError from './BaseError';
import { STATUS_CODE } from '../../utils/constants';

class INTERNAL_SERVERError extends BaseError {
  constructor(
    name: string,
    statusCode = STATUS_CODE.INTERNAL_SERVER,
    description = 'INTERNAL_SERVER ERROR.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
export default INTERNAL_SERVERError;
