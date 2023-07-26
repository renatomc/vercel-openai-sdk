'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input,handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px]">
    <CardHeader>
      <CardTitle>
        Chat AI
      </CardTitle>
      <CardDescription>
        Using Vercel SDK to create a chat bot.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-[600px] w-full pr-4"> 
        { messages.map(
          message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
              {message.role === 'user' && (
                <Avatar>
                <AvatarFallback>RC</AvatarFallback>
                <AvatarImage src="https://github.com/renatomc.png" />
              </Avatar>
              )}
              {message.role === 'assistant' && (
                  <Avatar>
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}
              <p className="leadgin-relaxed">
                <span className="block font-bold text-slate-800">
                  {message.role === 'user' ? 'Usuário' : 'AI'}:
                </span>
              {message.content}
              </p>
            </div>
            )
          }
        ) }
      </ScrollArea>
    </CardContent>
    <CardFooter>
      <form className="w-full flex gap-2" onSubmit={handleSubmit}>
        <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
        <Button type="submit">Send</Button>
      </form>
    </CardFooter>
  </Card>
  )
}