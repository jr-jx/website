import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/ui/PageContainer";

export default function PrivacyPage() {
  return (
    <PageContainer variant="default">
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <Badge className="mb-4">隐私政策</Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">隐私政策</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们重视您的隐私权，本政策详细说明了我们如何收集、使用和保护您的个人信息。
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* 最后更新时间 */}
            <Card>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>最后更新时间：</strong>2025年10月8日
                </p>
              </CardContent>
            </Card>

            {/* 信息收集 */}
            <Card>
              <CardHeader>
                <CardTitle>1. 信息收集</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">我们可能收集的信息类型：</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>个人身份信息（如姓名、邮箱地址）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>联系信息（如电话号码、地址）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>技术信息（如IP地址、浏览器类型、设备信息）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>使用数据（如访问时间、页面浏览记录）</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 信息使用 */}
            <Card>
              <CardHeader>
                <CardTitle>2. 信息使用</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">我们使用收集的信息用于：</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>提供和改进我们的服务</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>处理您的申请和请求</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>与您沟通和发送通知</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>分析网站使用情况以改进用户体验</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>确保网站安全和防止欺诈</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 信息共享 */}
            <Card>
              <CardHeader>
                <CardTitle>3. 信息共享</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们不会出售、交易或以其他方式转让您的个人信息给第三方，除非：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>获得您的明确同意</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>法律要求或法院命令</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>保护我们的权利、财产或安全</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 数据安全 */}
            <Card>
              <CardHeader>
                <CardTitle>4. 数据安全</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们采取适当的技术和组织措施来保护您的个人信息免受未经授权的访问、更改、披露或销毁。这些措施包括：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>使用加密技术保护数据传输</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>定期更新安全系统和软件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>限制对个人信息的访问权限</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>定期进行安全审计和评估</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookie使用 */}
            <Card>
              <CardHeader>
                <CardTitle>5. Cookie使用</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们的网站使用Cookie来改善用户体验。Cookie是存储在您设备上的小文本文件，用于：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>记住您的偏好设置</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>分析网站流量和使用模式</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>提供个性化内容</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  您可以通过浏览器设置控制Cookie的使用，但禁用Cookie可能会影响网站的某些功能。
                </p>
              </CardContent>
            </Card>

            {/* 您的权利 */}
            <Card>
              <CardHeader>
                <CardTitle>6. 您的权利</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  根据适用的数据保护法律，您拥有以下权利：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>访问您的个人信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>更正不准确的信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>删除您的个人信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>限制或反对处理您的信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>数据可携带权</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 联系我们 */}
            <Card>
              <CardHeader>
                <CardTitle>7. 联系我们</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>邮箱：</strong>hi@jr-jx.cn
                  </p>
                  <p>
                    <strong>地址：</strong>江西省南昌市新建区江西软件职业技术大学
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">我们将在收到您的请求后30天内回复。</p>
              </CardContent>
            </Card>

            {/* 政策更新 */}
            <Card>
              <CardHeader>
                <CardTitle>8. 政策更新</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  我们可能会不时更新本隐私政策。任何重大变更都会在网站上公布，并更新&quot;最后更新时间&quot;。我们建议您定期查看本政策以了解任何变更。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
