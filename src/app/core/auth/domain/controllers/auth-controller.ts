import { Injectable } from "@angular/core";
import { AuthRepository } from "../../infrastructure/repository/auth-repository";
import { MessageDetail, ResponseController } from "../../../../common/models/common";
import { ResponseTokenDto } from "../../infrastructure/dto/responseToken";
import { isNullOrUndefined } from "../../../../common/functions/common.functions";
import { UserLogin } from "../../../../common/models/user-login";


@Injectable({ providedIn: 'root' })
export class AuthController {
  constructor(private repository: AuthRepository) {
  }

  login(model: UserLogin) {
    return new Promise<ResponseController<ResponseTokenDto>>((response) => {
      let controller: ResponseController<ResponseTokenDto>;
      let msg: MessageDetail = {};
      this.repository.login(model).subscribe(result => {
        if (isNullOrUndefined(result)) {
          msg = { severity: 'info', summary: 'Error interno del servidor', detail: '' };
          controller = { messageAlert: msg, error: true, event: false };
        } else {
          if (!result?.isSuccessful) {
            msg = { severity: 'error', summary: 'Error', detail: result?.message, };
            controller = { messageAlert: msg, error: true, event: false, help: result?.result };
          } else {
            controller = { body: result.data ?? {}, error: false, event: false };
          }
        }
        return response(controller);
      });
    });
  }
}
