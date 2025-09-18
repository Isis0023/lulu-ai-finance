import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield, Mail, Smartphone, Clock, RefreshCw } from "lucide-react";

const TwoFactorAuth = () => {
  const [code, setCode] = useState("");
  const [method, setMethod] = useState("email");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVerifyCode = async () => {
    if (code.length !== 6) {
      toast({
        variant: "destructive",
        title: "Código inválido",
        description: "O código deve ter 6 dígitos."
      });
      return;
    }

    setIsLoading(true);
    
    // Simulação de verificação
    setTimeout(() => {
      if (code === "123456") {
        toast({
          title: "Código verificado!",
          description: "Redirecionando para o painel..."
        });
        setTimeout(() => navigate("/admin/users"), 1500);
      } else {
        toast({
          variant: "destructive",
          title: "Código incorreto",
          description: "Verifique o código e tente novamente."
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    toast({
      title: "Código reenviado",
      description: `Novo código enviado por ${method === "email" ? "email" : "SMS"}.`
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Verificação de Segurança</CardTitle>
            <CardDescription className="mt-2">
              Insira o código de 6 dígitos enviado para sua autenticação em duas etapas
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="method">Método de recebimento</Label>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email (****@example.com)
                  </div>
                </SelectItem>
                <SelectItem value="sms">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    SMS (+55 11 ****-1234)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Código de verificação</Label>
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={code} onChange={setCode}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <Clock className="w-4 h-4" />
              Código expira em {timeLeft}s
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleVerifyCode} 
              className="w-full"
              disabled={isLoading || code.length !== 6}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Verificando...
                </>
              ) : (
                "Verificar Código"
              )}
            </Button>

            <Button 
              variant="outline" 
              onClick={handleResendCode}
              className="w-full"
              disabled={timeLeft > 0}
            >
              {timeLeft > 0 ? `Reenviar código em ${timeLeft}s` : "Reenviar código"}
            </Button>
          </div>

          <div className="text-center">
            <Button variant="ghost" onClick={() => navigate("/")}>
              Voltar ao login
            </Button>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground">
              <strong>Protótipo:</strong> Use o código <code className="bg-background px-1 rounded">123456</code> para testar
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoFactorAuth;