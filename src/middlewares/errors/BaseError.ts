import { STATUS_CODE } from '../../utils/constants';
class BaseError extends Error {
  constructor(
    readonly name: string,
    readonly statusCode: STATUS_CODE,
    readonly isOperational: boolean,
    readonly description: string,
  ) {
    super(description);
  }
}
export default BaseError;
