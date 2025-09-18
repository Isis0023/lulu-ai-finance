import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, TrendingUp, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implementar lógica de login
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-60 right-32 w-24 h-24 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full blur-xl" />
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center text-white p-12 relative z-10">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Lulu
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Seu parceiro inteligente para finanças e investimentos
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Investimentos Inteligentes</h3>
                  <p className="text-sm opacity-80">IA para otimizar seus rendimentos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Segurança Total</h3>
                  <p className="text-sm opacity-80">Seus dados protegidos com criptografia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Análises Detalhadas</h3>
                  <p className="text-sm opacity-80">Relatórios completos sobre suas finanças</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <Card className="w-full max-w-md shadow-large bg-gradient-card border-0">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 lg:hidden">
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Lulu
                </h1>
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Bem-vindo de volta
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Faça login para acessar sua conta
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-background border-border focus:border-finance-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-background border-border focus:border-finance-primary transition-colors pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-finance-primary bg-background border-border rounded focus:ring-finance-primary"
                  />
                  <Label htmlFor="remember" className="text-muted-foreground">
                    Lembrar de mim
                  </Label>
                </div>
                <Button variant="link" className="p-0 h-auto text-finance-primary">
                  <Link to="/forgot-password">
                    Esqueceu a senha?
                  </Link>
                </Button>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 pt-6">
              <Button
                onClick={handleLogin}
                variant="financial"
                size="lg"
                className="w-full h-12 text-base font-semibold"
              >
                Entrar
              </Button>
              
              {/* Botão temporário para acessar área admin */}
              <Link to="/two-factor-auth" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-12 text-base font-semibold border-finance-primary text-finance-primary hover:bg-finance-primary hover:text-white"
                >
                  Login com 2FA (Demo)
                </Button>
              </Link>
              
              <Link to="/admin/users" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-12 text-base font-semibold border-finance-primary text-finance-primary hover:bg-finance-primary hover:text-white"
                >
                  Área do Administrador (Demo)
                </Button>
              </Link>
              
              <div className="text-center text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link to="/register">
                  <Button variant="link" className="p-0 h-auto text-finance-primary font-medium">
                    Criar conta
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;