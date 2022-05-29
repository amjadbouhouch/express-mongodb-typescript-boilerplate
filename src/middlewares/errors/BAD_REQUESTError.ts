import BaseError from './BaseError';
import { STATUS_CODE } from '../../utils/constants';

class BAD_REQUESTError extends BaseError {
  constructor(
    name: string,
    statusCode = STATUS_CODE.BAD_REQUEST,
    description = 'BAD_REQUEST.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
export default BAD_REQUESTError;
