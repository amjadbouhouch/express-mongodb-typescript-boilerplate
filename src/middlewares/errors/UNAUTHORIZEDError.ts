import BaseError from './BaseError';
import { STATUS_CODE } from '../../utils/constants';

class NoTFoundError extends BaseError {
  constructor(
    name: string,
    statusCode = STATUS_CODE.NOT_FOUND,
    description = 'Not found.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
export default NoTFoundError;
