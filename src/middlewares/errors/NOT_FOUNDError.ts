import BaseError from './BaseError';
import { STATUS_CODE } from '../../utils/constants';

class UNAUTHORIZEDError extends BaseError {
  constructor(
    name: string,
    statusCode = STATUS_CODE.UNAUTHORIZED,
    description = 'UNAUTHORIZED',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
export default UNAUTHORIZEDError;
