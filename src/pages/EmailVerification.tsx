import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (verificationCode === "123456") {
      setIsVerified(true);
      toast({
        title: "E-mail verificado com sucesso!",
        description: "Sua conta foi ativada.",
      });
    } else {
      toast({
        title: "Código inválido",
        description: "Por favor, verifique o código e tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleResendCode = () => {
    toast({
      title: "Código reenviado",
      description: "Um novo código foi enviado para seu e-mail.",
    });
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
              E-mail Verificado!
            </CardTitle>
            <CardDescription>
              Sua conta foi ativada com sucesso. Agora você pode fazer login.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button className="w-full">
                Ir para Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-2xl font-bold">Verificar E-mail</CardTitle>
          <CardDescription>
            Enviamos um código de 6 dígitos para seu e-mail. Digite-o abaixo para verificar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertDescription>
              Verifique sua caixa de entrada e spam. O código expira em 10 minutos.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Código de Verificação</label>
              <Input
                type="text"
                placeholder="000000"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={verificationCode.length !== 6}>
              Verificar E-mail
            </Button>
          </form>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Não recebeu o código?
            </p>
            <Button variant="outline" onClick={handleResendCode} className="w-full">
              Reenviar Código
            </Button>
          </div>

          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar ao login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;