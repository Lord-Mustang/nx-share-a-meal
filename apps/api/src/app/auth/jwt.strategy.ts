import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  //
  private readonly logger = new Logger(JwtStrategy.name)

  /**
   *
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secretstring'
    })
  }

  /**
   *
   */
  async validate(payload: any) {
    return { userId: payload.sub, emailAdress: payload.emailAdress }
  }
}
