import {Request, Response} from 'express'
import * as jwt from 'jsonwebtoken'
import {apiConfig} from './api-config'

export const handleAuthorization = (req: Request, resp: Response, next) => {
	const token = extractToken(req)
	if(!token){
		resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"') 
		resp.status(401).json({message:'Autenticaçao necessaria para esse tipo de acesso.'})
	}else{
		jwt.verify(token, apiConfig.secret, (error, decoded) => {
			if(decoded){
				next()
			} else{
				resp.status(403).json({message:'Forbiden get out of here...'})
			}
		})
	}
}

function extractToken(req: Request):string{
	let token = undefined
	if(req.headers && req.headers.authorization){
		//O token chega dessa forma:
		//Bearer ZZZZ.ZZZZ.ZZZZ
		const parts: string[] = req.header('authorization').split(' ')
		if(parts.length === 2 && parts[0]=== 'Bearer'){
			token = parts[1]
		}
	}
	return token	
}