import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Brain, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-finance.jpg";
import featuresImage from "../assets/features-finance.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Lulu
              </h1>
              <Badge variant="secondary" className="text-xs">BETA</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="default">Criar Conta</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  🚀 Revolucione suas finanças
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  O futuro das
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {" "}finanças{" "}
                  </span>
                  está aqui
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Transforme sua relação com o dinheiro. Invista com inteligência artificial, 
                  gerencie suas finanças e alcance seus objetivos financeiros.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="text-base px-8 py-6 h-auto">
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                  <Play className="mr-2 w-5 h-5" />
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Usuários</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">R$ 2B+</div>
                  <div className="text-sm text-muted-foreground">Gerenciado</div>
                </div>
                <div className="text-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">4.9/5 Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Lulu Financial Platform" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Recursos</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Tudo que você precisa para
              <span className="bg-gradient-primary bg-clip-text text-transparent"> prosperar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa com as melhores ferramentas financeiras em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">IA Financeira</h3>
                <p className="text-muted-foreground">
                  Inteligência artificial que analisa seus gastos e sugere as melhores estratégias de investimento
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Investimentos Inteligentes</h3>
                <p className="text-muted-foreground">
                  Carteiras diversificadas criadas automaticamente baseadas no seu perfil e objetivos
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Segurança Bancária</h3>
                <p className="text-muted-foreground">
                  Criptografia de nível militar e autenticação em duas etapas para máxima proteção
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Análises Avançadas</h3>
                <p className="text-muted-foreground">
                  Relatórios detalhados e insights em tempo real sobre sua saúde financeira
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">App Mobile</h3>
                <p className="text-muted-foreground">
                  Acesse suas finanças a qualquer hora, em qualquer lugar com nosso app intuitivo
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Conformidade Total</h3>
                <p className="text-muted-foreground">
                  Regulamentado pelo Banco Central e em conformidade com todas as leis financeiras
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={featuresImage} 
                alt="Recursos da plataforma Lulu" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="outline">Por que escolher Lulu?</Badge>
              <h3 className="text-3xl font-bold">
                A plataforma mais completa do mercado
              </h3>
              <div className="space-y-4">
                {[
                  "Interface intuitiva e fácil de usar",
                  "Suporte 24/7 com especialistas",
                  "Sem taxas ocultas ou mensalidades",
                  "Rentabilidade acima da média do mercado",
                  "Educação financeira personalizada"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pronto para transformar suas finanças?
            </h2>
            <p className="text-xl opacity-90">
              Junte-se a milhares de pessoas que já estão construindo um futuro financeiro mais próspero
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto text-primary">
                  Criar Conta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary">
                  Já tenho conta
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-75">
              🎉 Primeiros 30 dias grátis • 🔒 100% seguro • ⚡ Configuração em 2 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Lulu
            </h3>
            <p className="text-muted-foreground">
              O futuro das finanças pessoais está aqui
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Sobre</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos</a>
              <a href="#" className="hover:text-primary transition-colors">Contato</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Lulu. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;